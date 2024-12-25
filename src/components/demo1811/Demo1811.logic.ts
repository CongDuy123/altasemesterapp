// import {error} from 'console';
// import {resolve} from 'path';

export const getTotalNumberOfFlower = async (): Promise<number> => {
    return new Promise(resolve => {
      fetch('https://intern-chat.dev.altasoftware.vn/api/Image/count', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => console.log(error));
    });
  };
  
  export const fetchApiList = async (
    pageNumber: number,
    pageSize: number,
  ): Promise<string[]> => {
    return new Promise(resolve => {
      fetch(
        'https://intern-chat.dev.altasoftware.vn/api/Image/' +
          pageNumber +
          '/' +
          pageSize,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => console.log(error));
    });
  };
  
  export const fetchFlowerList = async (
    pageNumber: number,
    pageSize: number,
  ): Promise<{urls: string[]}[]> => {
    return new Promise(resolve => {
      fetch(
        'https://intern-chat.dev.altasoftware.vn/api/Image/' +
          pageNumber +
          '/' +
          pageSize,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(data => {
          let returnData: {urls: string[]}[] = [];
          let urls: string[];
          data.map((item: string, index: number) => {
            if (index % 3 === 0) {
              if (index !== 0) {
                returnData.push({urls: urls});
              }
              urls = [];
            }
            urls.push(item);
            if (index === data.length - 1) {
              returnData.push({urls: urls});
            }
          });
          resolve(returnData);
        })
        .catch(error => console.log(error));
    });
  };
  