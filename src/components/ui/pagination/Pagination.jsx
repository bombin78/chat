import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import classes from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);

    return (
      <div className={classes.pageWrapper}>
        {pagesArray.map(item => {
          const pageClasses = [classes.page];

          if(page === item) {
            pageClasses.push(classes.current);
          }
          return (
            <span
              onClick={() => changePage(item)}
              key={item}
              className={pageClasses.join(' ')}
            >
              {item}
            </span>
          );
        })}
      </div>
    );
};

export default Pagination;