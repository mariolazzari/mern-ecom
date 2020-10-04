const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  const { message } = err;
  const stack = process.env.NODE_ENV === "production" ? null : message.stack;
  res.json({ message, stack });
  next();
};

export { notFound, errorHandler };
