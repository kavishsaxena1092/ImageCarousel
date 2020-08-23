function encodeQueryParams(obj, prefix) {
  const str = [];
  let p;
  for (p in obj) {
    if (obj.hasOwnProperty(p) && obj[p] !== undefined) {
      let k;
      if (Object.prototype.toString.call(obj) === '[object Array]') {
        k = prefix ? `${prefix}[]` : p;
      } else {
        k = prefix ? `${prefix}[${p}]` : p;
      }
      const v = obj[p];
      str.push(
        v !== null && typeof v === 'object'
          ? encodeQueryParams(v, k)
          : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
      );
    }
  }
  return str.join('&');
}

const getMessage = error => {
  if (error.message) {
    return error.message;
  }
  if (error.body && error.body.externalMessage) {
    return error.body.externalMessage;
  }
  return error.body.message;
}

export const fetchData = ({ url, path, method = 'GET', qs = {}, body }) => {
  const pathWithQS = `${path}?${encodeQueryParams(qs)}`;
  const options = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  }
  if (method !== 'GET' && body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url + pathWithQS, options)
    .then(response => {
      if (response.status >= 400) {
        return response.json().then((errorDetails) => {
          throw new Error(getMessage(errorDetails));
        })
      }
      return response.json()
    });
}

const getQueryVariables = query => {
  const vars = query.split('&');
  const queryParams = {};
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    const variable = decodeURIComponent(pair[0]);
    queryParams[variable] = decodeURIComponent(pair[1]);
  }
  return queryParams;
};

export const getQueryParamFromURL = url => {
  const queryString = url && url.split('?')[1] ? url.split('?')[1] : '';
  return getQueryVariables(queryString);
}
