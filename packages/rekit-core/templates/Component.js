import React, { Component } from 'react';
import styles from './${_.pascalCase(component)}.scss';

export default class ${_.pascalCase(component)} extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className={styles=["${_.kebabCase(feature || 'component') + '-' + _.kebabCase(component)}"]}>
        Component content: ${_.kebabCase(feature)}/${_.pascalCase(component)}
      </div>
    );
  }
}
