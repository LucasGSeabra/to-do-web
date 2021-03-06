import React from 'react';

import './styles.css';

interface PageHeaderProps {
  name: string;
  small: string;
}

function PageHeader({ name, small }: PageHeaderProps) {
  return (
    <header className="page-header">
      <h2>
        {name}
        {' '}
        <small>{small}</small>
      </h2>
    </header>
  );
}

export default PageHeader;
