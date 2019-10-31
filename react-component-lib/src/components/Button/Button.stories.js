import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Default", () => <Button label="Default" type="default" />)
  .add("Large Primary", () => <Button label="Large" type="primary" large />)
  .add("Large Danger", () => <Button label="Danger" type="danger" large />)
  .add("Large Success", () => <Button label="Success" type="success" large />)
  .add("Large Warning", () => <Button label="Warning" type="warning" large />)
  .add("Large Defaut", () => <Button label="Default" type="default" large />)
  .add("Primary Lighter", () => <Button label="Primary" type="primary-lighter" />)
  .add("Danger Lighter", () => <Button label="Danger" type="danger-lighter" />)
  .add("Success Lighter", () => <Button label="Success" type="success-lighter" />)
  .add("Warning Lighter", () => <Button label="Warning" type="warning-lighter" />)
  .add("Default Lighter", () => <Button label="Default" type="default-lighter" />);