import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
`

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  margin-bottom: 5rem;
`;


export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  margin-top: 10px;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    color: #fff;
    transform: scaleX(1);
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const HeaderThreeModal = styled.h3`
  margin-top: 10px;
  text-decoration: none;
  font-weight: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9cc9e3;
  padding: 20px 50px 20px 50px;
  font-size: 3rem;
  color: #000;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.43rem;
    padding: 0 10px 20px 10px;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;


export const Hr2 = styled.hr`
  width: 50px;
  height: 3px;
  // margin: 20px auto;
  border: 0;
  background: #d0bb57;
  margin-bottom: 20px;
  margin-top: 10px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ${(props) => props.modal ? '#000' : '#dce3e7'};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;
}
margin-bottom: 3rem;
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`
