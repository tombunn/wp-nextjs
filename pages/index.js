import React from 'react'
import fetch from 'isomorphic-fetch'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Main from '../components/Main'
const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

// Todo: add smooth scrollinggggg

export default class extends React.Component {
  static async getInitialProps () {
    // GET posts
    const res1 = await fetch(baseURL + APIendpoint + 'posts')
    const posts = await res1.json()
    // GET Name and Blog Description
    const res2 = await fetch(baseURL + 'wp-json')
    const data = await res2.json()

    return {
      title: data.name,
      description: data.description,
      recentPosts: posts.slice(0, 5)
    }
  }
  render () {
    return (
      <div>
        <Head title={this.props.title} />
        <Hero title={this.props.title} description={this.props.description} hasimage frontPage />
        <div className='blog has-sidebar'>
          <Main
            hasSidebar
            recentPosts={this.props.recentPosts}
          />
        </div>
      </div>
    )
  }
}
