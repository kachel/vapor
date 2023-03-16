import React from 'react';

import { Card } from './Card';
import { Button } from './Button';
import { Divider } from './Divider';
import './page.css';

export const Page = () => {
 return (


  <div className="example">
    <Divider />
    <h1 className="header-fancy">
      V A P O R W A V E
    </h1>
    <Divider />
    <Button label="yessss"/>
    <p>
      Proin nisi risus, maximus et hendrerit et, porttitor a felis. In commodo massa sit amet faucibus pharetra. Nunc malesuada rutrum elit, vitae interdum purus egestas vitae. Nunc sit amet nibh rutrum eros mattis mollis. Nunc viverra dolor ac vehicula luctus. Sed eu ipsum auctor, egestas lorem et, fermentum justo. Nam ullamcorper nulla in nibh pellentesque molestie. Nulla sodales lacinia enim et auctor. lfdskl;fs;l
    </p>

    <Card label="this is a header" />


    </div>
  );
};
