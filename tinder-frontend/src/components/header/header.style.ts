import styled from "src/components/header/node_modules/styled-components";


const Header = styled.div.attrs(() => ({
    className: "header",
}))`
display: flex;
justify-content: space-between;
align-items: center;
z-index: 100;
border-bottom: solid 1px #f9f9f9;
margin-bottom: 3px;
 .header-icon {
     padding: 20px;
}
.tinder-image {
    object-fit: contain;
    height: 40px;
}
`


export default Header