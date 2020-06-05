const express = require("express");
const router = express.Router();

const title = "Starting a pig farm";
const homeStartingContent =
  "Pig farming is one of the most profitable livestock venture,yet it is also the least understood. The misconceptions about pig farming range from issues of hygiene to market size. Before venturing out into pig farming, it is important to clear some of these misconceptions.Hygiene It used to be that domesticated pig farms were obnoxious places to visit. Pigs are seen as dirty animals and so the household farmer kept the livestock in generally poor conditions where they rolled in dirt and ingested their effluent. In recent times however with increased access to information, this has changed as the pig farmer has become aware that hygiene was among the basic factors for success in pig farming. Market Size The market for pig farming is increasing daily as traditional prejudices for pork are gradually becoming eroded. To put it into perspective domestic consumption for pork far outweigh the production levels as local farmers grapple with the increasing demand for their products. If there was a better time to venture into pig farming.";

router.get("/blog", (req, res) => {
  res.render("blog", {
    blogTitle: title,
    startingContent: homeStartingContent,
  });
});

router.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({ _id: requestedPostId }, function (err, post) {
    res.render("post", {
      title: post.title,
      content: post.content,
    });
  });
});

module.exports = router;
