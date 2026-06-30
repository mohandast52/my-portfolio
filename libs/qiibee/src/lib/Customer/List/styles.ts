import styled from 'styled-components';
import { Card } from 'antd';

export const Actions = styled.div`
  display: flex;
  padding: 0 24px;
  justify-content: flex-end;
  .ant-btn {
    margin-left: 8px;
  }
`;

export const BrandCard = styled(Card)`
  width: 280px;
  margin: 0 auto !important;

  .ant-card-cover { 
    height: 150px;
    img { 
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .ant-card-meta-title {
    text-transform: uppercase;
  }

  .ant-card-meta-description {
    overflow: hidden;
    -webkit-box-orient: vertical;
    margin-bottom: 12px;
  }
`;
