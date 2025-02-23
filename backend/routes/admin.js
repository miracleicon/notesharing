const express = require('express');
const router = express.Router();
const User = require('../model/User'); // Assuming User model exists
const Notes = require('../model/Notes'); // Assuming Notes model exists
const { verifyAdmin } = require('../middleware/auth');

// Get all users (Admin only)
router.get('/users', verifyAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a user (Admin only)
router.delete('/users/:id', verifyAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all notes (Admin only)
router.get('/notes', verifyAdmin, async (req, res) => {
    try {
        const notes = await Notes.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a note (Admin only)
router.delete('/notes/:id', verifyAdmin, async (req, res) => {
    try {
        await Notes.findByIdAndDelete(req.params.id);
        res.json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
