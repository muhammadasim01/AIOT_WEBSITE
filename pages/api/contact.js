export default async (req, res) => {
  console.log("REQUESTED BODY", req.body);
  res.status(200).send({ data: req.body });
};
