import React from 'react'


import querystring from 'querystring'

function S2(props) {
  
  const query = querystring.parse(props.location.search)
  console.log(query.name)
  console.log(query.age)

  let id = props.match.params.id
  return (
    <div>
      <p>S2+{id}</p>
    </div>
  )
}

export default S2
