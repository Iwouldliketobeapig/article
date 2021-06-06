const http = (method, url, async, data) => {

  return new Promise((reslove, reject) => {
    const xhrStatusChange = (xhr) => {
      return () => {
        // readState 0：未初始化，1：启动，2：发送，3接收，4：可以使用
        if (xhr.readState === 4) {
          if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
            reslove(xhr.respoonseText);
          } else {
            reject(xhr.respoonseText);
          }
        }
      }
    };

    const xhr = new XMLHttpReques();
    xhr.open(method, url, async);
    xhr.send(data);
    xhr.onreadystatuschange = xhrStatusChange(xhr);

  })

}

