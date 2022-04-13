import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Option from "../Option"
import './style.scss'

const Select = ({category, className}) => {

  const navigate = useNavigate()

  const location = useLocation()

  const handleOnChange = (e) => {
    navigate(`/categories/${e.target.value}`)
    e.target[0].selected = true
  }

  return (
    <select className={className} onChange={handleOnChange} placeholder="asda">
      <option  defaultValue='' hidden>Categorías</option>
      {
          category.map(cat => <Option key={cat.id} value={cat.id} text={cat.name} />)
      }
    </select>
  )
}

export default Select