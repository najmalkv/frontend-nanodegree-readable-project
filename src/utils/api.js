const API_SERVER = "http://localhost:3001"

const headers = {
	 'Authorization': 'test',
	 'Content-Type': 'application/json'
}


export function fetchCategories () {
 return fetch(`${API_SERVER}/categories`,{
	headers: {
		 ...headers
	}
	})
	.then(res => res.json())
	.then(({categories}) => categories)

}

export function fetchPosts () {
 return fetch(`${API_SERVER}/posts`,{
	headers: {
		 ...headers
	}
	})
	.then(res => res.json())


}

export function fetchPostsByCategory (category) {
 return fetch(`${API_SERVER}/${category}/posts`,{
	headers: {
		 ...headers
	}
	})
	.then(res => res.json())


}


export function fetchPostById (id) {
 return fetch(`${API_SERVER}/posts/${id}`,{
	headers: {
		 ...headers
	}
	})
	.then(res => res.json())


}

export function fetchVotePostById (id, option) {

 const body = {option: option}

 return fetch(`${API_SERVER}/posts/${id}`,{
 	method: 'POST',
	headers: {
		 ...headers
	},
	body: JSON.stringify(body)
	})
	.then(res => res.json())
}

export function fetchAddPost (body) {
 return fetch(`${API_SERVER}/posts`,{
 	method: 'POST',
	headers: {
		 ...headers
	},
	body: body
	})
	.then(res => res.json())
}

export function fetchEditPost ( id,body) {
 return fetch(`${API_SERVER}/posts/${id}`,{
 	method: 'PUT',
	headers: {
		 ...headers
	},
	body: body
	})
	.then(res => res.json())
}

export function fetchDeletePost (id) {
 return fetch(`${API_SERVER}/posts/${id}`,{
 	method: 'DELETE',
	headers: {
		 ...headers
	}
	})
	// .then(res => res.json())
}

export function fetchComments (id) {
 return fetch(`${API_SERVER}/posts/${id}/comments`,{
	headers: {
		 ...headers
	}
	})
	.then(res => res.json())

}

export function fetchVoteCommentById (id, option) {

 const body = {option: option}

 return fetch(`${API_SERVER}/comments/${id}`,{
 	method: 'POST',
	headers: {
		 ...headers
	},
	body: JSON.stringify(body)
	})
	.then(res => res.json())
}

export function fetchAddComment (body) {
 return fetch(`${API_SERVER}/comments`,{
 	method: 'POST',
	headers: {
		 ...headers
	},
	body: body
	})
	.then(res => res.json())
}

export function fetchDeleteComment (id) {
 return fetch(`${API_SERVER}/comments/${id}`,{
 	method: 'DELETE',
	headers: {
		 ...headers
	}
	})
	.then(res => res.json())
}

export function fetchEditComment ( id,body) {
 return fetch(`${API_SERVER}/comments/${id}`,{
 	method: 'PUT',
	headers: {
		 ...headers
	},
	body: body
	})
	.then(res => res.json())
}