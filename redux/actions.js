// All of our action types
export const GET_SITE = 'GET_SITE'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GOT_CATEGORIES = 'GOT_CATEGORIES'
export const GOT_COMMENTS = 'GOT_COMMENTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR'
export const REQUEST_POST_COMMENTS = 'REQUEST_POST_COMMENTS'
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS'
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'
export const RECEIVE_SEARCH_QUERY = 'RECEIVE_SEARCH_QUERY'

/**
 *  Fetch the root site info
 *  @param {object} site - the new site to update
 */
export function getSite (site) {
  return {
    type: GET_SITE,
    site
  }
}

/**
 * Get the categories from a source of truth
 * @param {array} categories - the categories to update
 */
export function requestCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

/**
 * Trigger a state update when getting categories
 *
 * @param {array} categories
 */

export function receivedCategories (categories) {
  return {
    type: GOT_CATEGORIES,
    categories
  }
}

/**
 * Trigger a state update when you get some recent comments
 * @param {array} comments
 * @returns {object} action to pass to the reducer
 */
export function receivedComments (comments) {
  return {
    type: GOT_COMMENTS,
    comments
  }
}

/**
 * Let the state know we're about to fetch some comments
 */
export function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

/**
 * Trigger a state update once we get all the comments
 */
export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
    totalPages: parseInt(posts._paging.totalPages)
  }
}

/**
 * Change the active post once we get it from a source of truth
 */
export function receivePost (post) {
  return {
    type: RECEIVE_POST,
    post
  }
}

/**
 * Receive an author once we get it from a source of truth
 */
export function receiveAuthor (author) {
  return {
    type: RECEIVE_AUTHOR,
    author
  }
}

/**
 * Let the state know we are about to get some comments
 */
export function requestPostComments () {
  return {
    type: REQUEST_POST_COMMENTS
  }
}

/**
 * Receive comments for a post from a source of truth
 */
export function receivePostComments (comments) {
  if (comments._paging) {
    return {
      type: RECEIVE_POST_COMMENTS,
      comments,
      total: parseInt(comments._paging.total)
    }
  } else {
    return {
      type: RECEIVE_POST_COMMENTS,
      comments,
      total: 0
    }
  }
}

/**
 * Receive results from a source of truth
 */
export function receiveResults (results) {
  return {
    type: RECEIVE_RESULTS,
    results
  }
}

/**
 * Receive the search query to show on the frontend
 */

export function receiveSearchQuery (query) {
  return {
    type: RECEIVE_SEARCH_QUERY,
    query
  }
}
