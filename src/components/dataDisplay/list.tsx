import React from 'react'
import styled from 'styled-components'

type ListProps = {
  children?: React.ReactNode
}

const List = ({ children }: ListProps) => <ListRoot>{children}</ListRoot>

const ListRoot = styled.ul`
  color: #2d2e33;
  padding-top: 8px;
  padding-bottom: 8px;
  position: relative;
  list-style: none;
`

const ListItemRoot = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const ListItemText = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  margin-top: 4px;
  margin-bottom: 4px;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`

const ListItemIcon = styled.div`
  color: #9da0b2;
  display: inline-flex;
  min-width: 56px;
  flex-shrink: 0;
`

List.Item = ListItemRoot
List.ItemText = ListItemText
List.ItemIcon = ListItemIcon

export default List
