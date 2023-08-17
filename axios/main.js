// GET REQUEST
function getTodos() {
    // axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         params: {
    //             _limit: 5
    //         }
    //     })
    //     .then(res => showOutput(res))
    //     .catch(err => console.log(err))


    // same as above and when we are making any get request then there is no need to write get
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => showOutput(res))
        .catch(err => console.log(err))
}

// POST REQUEST
function addTodo() {
    // axios({
    //         method: 'post',
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         data: {
    //             title: 'New Data Added&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
    //             completed: false
    //         }
    //     })
    // .then(res => showOutput(res))
    // .catch(err => console.log(err))

    axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Data Added&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err))

}

// PUT/PATCH REQUEST
// PUT and PATCH based on 
// whether you want to replace the entire resource (PUT) or modify specific parts of it (PATCH).
function updateTodo() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'Update todo from put',
            completed: true
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err))

}

// DELETE REQUEST
function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => showOutput(res))
        .catch(err => console.log(err))
}

// SIMULTANEOUS DATA
function getData() {
    // axios
    //     .all([axios.get('https://jsonplaceholder.typicode.com/todos'),
    //         axios.get('https://jsonplaceholder.typicode.com/posts')
    //     ])
    //     .then((res) => {
    //         console.log(res[0])
    //         console.log(res[1])
    //         showOutput(res[1])
    //     })
    //     .catch(err => console.log(err))

    axios
        .all([axios.get('https://jsonplaceholder.typicode.com/todos'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
        .then(axios.spread((todos, posts) => showOutput(posts)))
        .catch(err => console.log(err))

}

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'some token'
        }
    }



    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New data from  custome headers',
            completed: false
        }, config)
        .then(res => showOutput(res))
        .catch(err => console.log(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {

    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'hello moto'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })



    }
    axios(options).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {


    axios
        .get('https://jsonplaceholder.typicode.com/todoss')
        .then(res => showOutput(res))
        .catch(err => {
            if (err.response) {
                // server responded with a status other than 200 range
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)



                if (err.response.status === 404) {
                    alert('Error:Page Not Found')
                }
            } else if (err.response) {
                // Requests was made but no response
                console.log(err.response)
            } else {
                console.log(err.message)
            }

        })

}

// CANCEL TOKEN
function cancelToken() {
    const source = axios.CancelToken.source();
    axios
        .get('https://jsonplaceholder.typicode.com/todos', {
            cancelToken: source.token
        })
        .then(res => showOutput(res))
        .catch(thrown => {
            if (axios.isCancel(thrown)) {
                console.log('Requests cancellled', thrown.message)
            }
        })


    if (true) {
        source.cancel('Request cancelled')
    }

}

// INTERCEPTING REQUESTS & RESPONSES
// not working 
// axios.interceptors.request.use(
//     config => {
//         console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`)
//     }
// )

// AXIOS INSTANCES
/*
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/comments').then(res => showOutput(res))
*/


// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);