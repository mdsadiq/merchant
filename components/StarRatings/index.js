export default function StarRatings({ reviews }) {
  let ratings = "";
  if (
    (!!reviews && typeof reviews === "string") ||
    typeof reviews === "number"
  ) {
    ratings = reviews;
  } else if (Array.isArray(reviews) && reviews.length > 0) {
    const average = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
    ratings = Math.round(average);
  } else {
    return null;
  }

  return (
    <div className="rounded-r-full rounded-l-full px-2 bg-gray-600">
      {ratings}
      <img className="inline ml-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" />
    </div>
  );
}
