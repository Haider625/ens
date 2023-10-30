
const ens = require('../modl/ens');
const controler = {
  getAll:async (req, res) => {
    const post = await ens.find();
    if (post){
        res.status(200).json({"post" : post})
    }else{
        res.status(404).json({Message : "post_get not working"})
    }
},
   getOne : async (req, res) => {
        const Id = req.params.id;
        const Get = await ens.findById(Id);
        if (Get){
            res.status(200).json({"lost" : Get})
        }else{
            res.status(404).json({Message : "lost_getone not working"})
        }
    },
      addOne:async (req, res) => {
        const post = await new ens({
          name:req.body.name,
          country:req.body.country, 
          typeOf: req.body.typeOf,
          Value:req.body.Value,
          createdOn:req.body.createdOn,
      }).save()
      if (post){
          res.status(200).json({"post" : post})
      }else{
          res.status(404).json({Message : "post_insert not working"})
      }
  },

  deleteone : async (req,res) => {
    const Id = req.params.id;
    const del = await ens.findByIdAndDelete(Id);
    if (del){
        res.status(200).json({Message : "post is deleted"})
    }else{
        res.status(404).json({Message : "post_delet not working"})
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