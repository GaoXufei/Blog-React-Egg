import { Input } from 'antd'
import * as React from 'react'

export default (props: any) => {

  const handleGetTitle = (e: any) => {
    props.onResult(e.target.value, 'title')
  }

  return (
    <Input onBlur={handleGetTitle} placeholder={'标题'} />
  )
}