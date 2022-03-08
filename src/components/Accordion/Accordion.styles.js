import styled, { css } from 'styled-components';

// Accordion

// These styles have been built using reusable blocks - beware of duplication 
// @TODO There is a lot of code not needed in here

export const Container = styled.div`
font-family: "GDS Transport", Helvetica, Arial, sans-serif;
color: black;
font-size: 16px;
font-size: 1rem;
line-height: 1.4;
-webkit-font-smoothing: antialiased;

@media screen and (min-width: 768px){
  font-size: 19px;
  font-size: 1.1875rem;
  line-height: 1.45;
  p, h2, h3, h4, ul, ol {
    max-width: 750px;
  }
}

margin-bottom: 20px;
border-bottom: 1px solid grey;

@media (min-width: 40.0625em) {
  margin-bottom: 30px;
}
`;

export const AccordionControls = styled.div`
text-align: right;
`;

export const OpenAllButton = styled.button`
font-size: .9rem;
position: relative;
z-index: 1;
margin: 0;
margin-bottom: 15px;
padding: 0;
border-width: 0;
color: #6C6F90;
background: none;
cursor: pointer;
&:hover {
  color: #904979;
  text-decoration: underline;
  text-decoration-style: dotted;
}
&:focus {
  color: black;
  background: yellow;
  outline: none;
  text-decoration: none !important;
  box-shadow: 0 -6px yellow, 0 3px black;
  -webkit-box-shadow: 0 -6px yellow, 0 3px black;
  -moz-box-shadow: 0 -6px yellow, 0 3px black;
}
&:active {
  color: black;
  background: yellow;
  outline: none;
  text-decoration: none !important;
  transform: translateY(2px);
  box-shadow: 0 -6px yellow, 0 1px black;
  -webkit-box-shadow: 0 -6px yellow, 0 1px black;
  -moz-box-shadow: 0 -6px yellow, 0 1px black;
}
`;

export const VisuallyHidden = styled.span`
position: absolute !important;
width: 1px !important;
height: 1px !important;
margin: 0 !important;
padding: 0 !important;
overflow: hidden !important;
clip: rect(0 0 0 0) !important;
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important;
border: 0 !important;
white-space: nowrap !important;
`;

// AccordionSection

export const Section = styled.div`
padding-top: 0;
`;

export const SectionHeader = styled.div`
h1 {
  font-size: 32px;
  font-size: 2rem;
  font-weight: 700;
  
  @media (min-width: 40.0625em) {
    font-size: 48px;
    font-size: 3rem;
  }
}
h2 {
  font-size: 24px;
  font-size: 1.5rem;
  font-weight: 700;
  
  @media (min-width: 40.0625em) {
    font-size: 36px;
    font-size: 2.25rem;
  }
}
h3 {
  font-size: 18px;
  font-size: 1.125rem;
  font-weight: 700;
  
  @media (min-width: 40.0625em) {
    font-size: 24px;
    font-size: 1.5rem;
  }
}
h4 {
  font-size: 16px;
  font-size: 1rem;
  font-weight: 700;
  
  @media (min-width: 40.0625em) {
    font-size: 19px;
    font-size: 1.1875rem;
  }
}
position: relative;
padding-right: 40px;
border-top: 1px solid grey;
color: #6C6F90;
cursor: pointer;
padding-bottom: 15px;

&:hover {
  border-top-color: #6C6F90;
  -webkit-box-shadow: inset 0 2px 0 0 #6C6F90;
  box-shadow: inset 0 2px 0 0 #6C6F90;
}
`;

export const SectionHeading = styled.div`
margin-top: 10px;
margin-bottom: 5px;
`;

const SectionButtonIsFilteredStyles = (props) => {
  if (props.isFilter) {
    return css`
    font-size: 16px;
    font-size: 1rem;
    font-weight: 700;
    
    @media (min-width: 40.0625em) {
      font-size: 19px;
      font-size: 1.1875rem;
    }
    `;
  } else {
    return css`
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 700;
    
    @media (min-width: 40.0625em) {
      font-size: 24px;
      font-size: 1.5rem;
    }
    `;
  }
};

export const SectionButton = styled.button`
display: inline-block;
margin-top: 0;
margin-bottom: 0;
margin-left: 0;
padding: 0;
border-width: 0;
color: inherit;
background: none;
text-align: left;
cursor: pointer;
-webkit-appearance: none;
text-decoration: underline;

${SectionButtonIsFilteredStyles}

&:focus {
  outline: 3px solid transparent;
  color: black;
  background-color: yellow;
  -webkit-box-shadow: 0 -2px yellow,
  0 4px black;
  box-shadow: 0 -2px yellow,
  0 4px black;
  text-decoration: none;
}

&::-moz-focus-inner {
  padding: 0;
  border: 0;
}

&:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

&:hover:not(:focus) {
  text-decoration: underline;
  text-decoration-style: dotted;
}

&:hover {
  text-decoration: none;
}
`;

export const ReadMore = styled.button`
color: #6C6F90;
font-weight: 700;
text-decoration: underline;
background: none;
border: none;
margin-top: 15px;
margin-bottom: 10px;
padding: 0;
font-size: .9rem;
`;
export const ShowLessButton = styled.button`
color: #6C6F90;
font-weight: 700;
text-decoration: underline;
background: none;
border: none;
margin-top: 15px;
padding: 0;
font-size: .9rem;
cursor: pointer;

&:hover {
  color: #904979;
  text-decoration: underline;
  text-decoration-style: dotted;
}
&:focus {
  color: black;
  background: yellow;
  outline: none;
  text-decoration: none !important;
  box-shadow: 0 -6px yellow, 0 3px black;
  -webkit-box-shadow: 0 -6px yellow, 0 3px black;
  -moz-box-shadow: 0 -6px yellow, 0 3px black;
}
&:active {
  color: black;
  background: yellow;
  outline: none;
  text-decoration: none !important;
  transform: translateY(2px);
  box-shadow: 0 -6px yellow, 0 1px black;
  -webkit-box-shadow: 0 -6px yellow, 0 1px black;
  -moz-box-shadow: 0 -6px yellow, 0 1px black;
}
`;

export const AccordionIcon = styled.span`
position: absolute;
top: 22px;
right: 4px;
width: 34px;
height: 32px;

&:before {
  border-style: solid;
  border-width: 4px 4px 0 0;
  content: '';
  display: inline-block;
  height: 12px;
  position: relative;
  vertical-align: top;
  width: 12px;
  border-color: black;
  top: 0;
  left: 6px;
  transform: rotate(135deg);
}

&:before {
  .accordion__section--expanded & {
    transform: rotate(-45deg);
    top: 10px;
  }
}
`;

export const SectionSummary = styled.div`
margin-top: 10px;
margin-bottom: 0;
color: black;
`;

export const SectionContent = styled.div`
display: none;
padding-top: 5px;
padding-bottom: 15px;

h2,
h3,
h4,
h5 {
  &:first-child {
    margin-top: 0;
  }
}

@media (min-width: 40.0625em) {
  padding-bottom: 25px;
}

> :last-child {
  margin-bottom: 0;
}

.accordion__section--expanded & {
  display: block;
}
`;
