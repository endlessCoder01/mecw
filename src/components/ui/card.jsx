import React from 'react';
import classNames from 'classnames';

export const Card = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={classNames('p-4 md:p-6 space-y-2', className)}>
      {children}
    </div>
  );
};
