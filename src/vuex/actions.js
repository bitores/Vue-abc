export const addNote = ({dispatch,commit}) => { // 第一个参数store, store中存在属性dispatch
	// dispatch 是 调用 actions
	dispatch('ADD_NOTE')
	// commit 是 调用 mutations
	commit('ADD_NOTE')
}

export const ADD_NOTE = ({dispatch,commit}) => {
	console.log('action ....');
}