import qs from "qs";

export function pageResolver(id: string) {
  return fetch(`http://localhost:1337/api/pages/${id}?populate=*`)
    .then((res) => res.json())
    .then((data) => data);
}
