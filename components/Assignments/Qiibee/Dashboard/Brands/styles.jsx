import styled from 'styled-components';

export const Name = styled.div`
  /* font-size: 2em; */
  font-weight: 600;
  text-shadow: 4px 4px 5px #7575755c;
  letter-spacing: 6px;
  margin-bottom: 24px;
`;

export const Info = styled.div`
  > div {
    margin-bottom: 8px;
  }
`;

export const Subheading = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-weight: bold;
  text-decoration: underline;
`;

export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  text-decoration: underline;
  /* text-underline-offset: 4px; */
  margin: 0 0 2rem 0;
  font-weight: 600;
`;

export const Reason = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;    
  margin: 0 auto;

  img {
    border-radius: 50%;
  }
  .desc {
    margin-top: 1rem;
    text-align: center;
    /* font-size: 1.2em; */
  }
`;

export const Container = styled.div`
  /* font-size: 1.2em;     */
  padding-bottom: 20px;

  img.idea-img { 
    margin: 6px auto;
    display: block;
  }

  .row-1 {
    .column-side-1 {
      padding-right: 24px;
      img {
        width: 100%;
      }
    }
    .column-side-2 {
      padding-right: 16px;
    }
    .column-side-3 {
      padding-left: 16px;
      border-left: 1px solid #cccccc38;
      .ant-btn {
        margin-top: 12px;
      }
    }
  }

  .reasons {
    ${Reason} {
      width: 224px;
    }
  }
`;

// --------------
export const Actions = styled.div`
  width: auto !important;
  border: none !important;
  margin: 0;
  &:nth-child(1){
    /* margin-top: 4px; */
  }
`;
