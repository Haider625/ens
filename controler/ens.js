
const ens = require('../modl/ens');
const ense = require('../modl/data/ens');
const controler = {
  getAll:async (req, res) => {
    const lost = await ens.find();
    if (lost){
        res.status(200).json({"lost" : lost})
    }else{
        res.status(404).json({Message : "lost_get not working"})
    }
},
    getOne: (req, res) => {
        const post = ens.find((post) => post.id === parseInt(req.params.id));
        if (post) {
          res.status(200).json({ post: post });
        } else {
          res.status(404).json({ message: "post not found" });
        }
      },
      addOne:async (req, res) => {
        const lost = await new ens({
          name:req.body.name,
          country:req.body.country, 
          typeOf: req.body.typeOf,
          Value:req.body.Value,
          createdOn:req.body.createdOn,
      }).save()
      if (lost){
          res.status(200).json({"lost" : lost})
      }else{
          res.status(404).json({Message : "lost_insert not working"})
      }
  },

      deleteOne: (req, res) => {
        const post = ens.find((post) => post.id === parseInt(req.params.id));
        if (post) {
          const index = ens.indexOf(post);
          ens.splice(index, 1);
          res.status(200).json({ message: "post is deleted" });
        } else {
          res.status(404).json({ message: "post not found" });
        }
      },
      updateOne: (req, res) => {
        const post = ens.find((post) => post.id === parseInt(req.params.id));
        if (post) {
          if (!req.body.title && !req.body.body) {
            res.status(200).json({ message: "you havent provided any value"});
          } else {
            post.title = req.body.title ? req.body.title : post.title;
            post.body = req.body.body ? req.body.body : post.body;
    
            res.status(200).json({ message: "post is updated" });
          }
        } else {
          res.status(404).json({ message: "post not found" });
        }
      },
    
    
};
module.exports = controler;