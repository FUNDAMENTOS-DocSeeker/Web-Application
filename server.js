const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('/news', (req, res, next) => {
  const news = router.db.get('news').value();
  res.json(news);
});

server.use('/patients', (req, res, next) => {
  const patients = router.db.get('patients').value();
  res.json(patients);
});
server.use('/medicalInformation', (req, res, next) => {
  const medicalInformation = router.db.get('medicalInformation').value();
  res.json(medicalInformation);
});
server.use('/doctors', (req, res, next) => {
  const doctors = router.db.get('doctors').value();
  res.json(doctors);
});
server.use('/reviews', (req, res, next) => {
  const reviews = router.db.get('reviews').value();
  res.json(reviews);
});
server.use('/dates', (req, res, next) => {
  const dates = router.db.get('dates').value();
  res.json(dates);
});
server.use('/prescriptions', (req, res, next) => {
  const prescriptions = router.db.get('prescriptions').value();
  res.json(prescriptions);
});
server.use('/medicalHistory', (req, res, next) => {
  const medicalHistory = router.db.get('medicalHistory').value();
  res.json(medicalHistory);
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
