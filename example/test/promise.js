function ajax (url, method, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(url, method);
    xhr.send(data);
    xhr.onreadystatechange(res => {
      if ( 200 <= res.status < 300) {
        resolve(res);
      } else {
        reject(res);
      }
    })
  })
};

ajax('text.com', 'get', { data }).then(res => {}).catch(res => {});