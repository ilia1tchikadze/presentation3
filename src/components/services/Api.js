const baseUrl = 'https://fakerapi.it/api/v1/{resource}';

export class API {
  static getNoteList({ callBack, start, limit }) {
    const url = `${baseUrl}/fake??_start=${start}&_limit=${limit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        callBack(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default API;
