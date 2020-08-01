const path = require('path');
const router = require('express').Router();

// route to index.html file 
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// route to public/animals file
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
})

// route for zookeepers page
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

module.exports = router;