const Venture = require('../models/Venture');

// Helper to generate unique slug
const generateSlug = async (title) => {
  let baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars
    .replace(/\s+/g, '-')         // replace spaces with -
    .replace(/-+/g, '-');         // remove duplicate -

  let slug = baseSlug;
  let counter = 1;
  while (await Venture.findOne({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

// @desc    Get all ventures
// @route   GET /api/ventures
// @access  Public
const getVentures = async (req, res) => {
  try {
    const { active, category } = req.query;
    let query = {};

    if (active === 'true') {
      query.status = true;
    }
    if (category) {
      query.category = category;
    }

    // Sort by displayOrder ascending, then by createdAt descending
    const ventures = await Venture.find(query).sort({ displayOrder: 1, createdAt: -1 });
    res.json({ success: true, count: ventures.length, data: ventures });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single venture by slug
// @route   GET /api/ventures/:slug
// @access  Public
const getVentureBySlug = async (req, res) => {
  try {
    const venture = await Venture.findOne({ slug: req.params.slug });
    if (!venture) {
      return res.status(404).json({ success: false, message: 'Venture not found' });
    }
    res.json({ success: true, data: venture });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new venture
// @route   POST /api/ventures
// @access  Private (Admin)
const createVenture = async (req, res) => {
  try {
    const { title, description, logo, coverImage, websiteUrl, category, isFeatured, displayOrder, status } = req.body;

    if (!title || !description || !logo || !coverImage || !websiteUrl || !category) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const slug = await generateSlug(title);

    // If displayOrder not provided, find the max displayOrder and add 1
    let order = displayOrder;
    if (order === undefined) {
      const maxOrderVenture = await Venture.findOne().sort('-displayOrder');
      order = maxOrderVenture ? maxOrderVenture.displayOrder + 1 : 0;
    }

    const venture = new Venture({
      title,
      slug,
      description,
      logo,
      coverImage,
      websiteUrl,
      category,
      isFeatured: isFeatured || false,
      displayOrder: order,
      status: status !== undefined ? status : true
    });

    const savedVenture = await venture.save();
    res.status(201).json({ success: true, data: savedVenture });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update venture by ID
// @route   PUT /api/ventures/:id
// @access  Private (Admin)
const updateVenture = async (req, res) => {
  try {
    const { title, description, logo, coverImage, websiteUrl, category, isFeatured, displayOrder, status } = req.body;

    let venture = await Venture.findById(req.params.id);
    if (!venture) {
      return res.status(404).json({ success: false, message: 'Venture not found' });
    }

    // Update slug if title is modified
    if (title && title !== venture.title) {
      req.body.slug = await generateSlug(title);
    }

    const updatedVenture = await Venture.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updatedVenture });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete venture by ID
// @route   DELETE /api/ventures/:id
// @access  Private (Admin)
const deleteVenture = async (req, res) => {
  try {
    const venture = await Venture.findById(req.params.id);
    if (!venture) {
      return res.status(404).json({ success: false, message: 'Venture not found' });
    }

    await Venture.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Venture deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update ventures display order
// @route   PATCH /api/ventures/order
// @access  Private (Admin)
const updateOrder = async (req, res) => {
  try {
    const { ids } = req.body; // Array of venture IDs in their new order
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({ success: false, message: 'Please provide ids array' });
    }

    // Bulk update displayOrder based on index
    const bulkOps = ids.map((id, index) => ({
      updateOne: {
        filter: { _id: id },
        update: { $set: { displayOrder: index } }
      }
    }));

    await Venture.bulkWrite(bulkOps);
    res.json({ success: true, message: 'Venture order updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Toggle venture status or featured state
// @route   PATCH /api/ventures/status
// @access  Private (Admin)
const updateStatus = async (req, res) => {
  try {
    const { id, status, isFeatured } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, message: 'Venture ID is required' });
    }

    const venture = await Venture.findById(id);
    if (!venture) {
      return res.status(404).json({ success: false, message: 'Venture not found' });
    }

    const updates = {};
    if (status !== undefined) updates.status = status;
    if (isFeatured !== undefined) updates.isFeatured = isFeatured;

    const updatedVenture = await Venture.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    );

    res.json({ success: true, data: updatedVenture });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getVentures,
  getVentureBySlug,
  createVenture,
  updateVenture,
  deleteVenture,
  updateOrder,
  updateStatus
};
