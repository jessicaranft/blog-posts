import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  ul {
    list-style: none;
  }

  .posts li {
    background-color: #e7e5e4;
    margin-bottom: 16px;
    padding: 24px;
    border-radius: 16px;
  }

  ul h2 {
    margin-bottom: 16px;
  }

  .comments li {
    margin-top: 16px;
    padding: 8px;
    font-size: 14px;
  }

  .pagination {
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .pagination-next,
  .pagination-previous,
  .pagination-link,
  .pagination-ellipsis {
    cursor: pointer;
  }
`;