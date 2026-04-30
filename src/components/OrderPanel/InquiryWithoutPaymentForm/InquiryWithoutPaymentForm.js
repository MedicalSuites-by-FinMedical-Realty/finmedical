import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';

import { FormattedMessage, useIntl } from '../../../util/reactIntl';

import { Form, PrimaryButton } from '../..';

import css from './InquiryWithoutPaymentForm.module.css';

const renderForm = formRenderProps => {
  // FormRenderProps from final-form
  const {
    formId,
    className,
    rootClassName,
    handleSubmit,
    isOwnListing,
    finePrintComponent: FinePrint,
    title,
  } = formRenderProps;
  const classes = classNames(rootClassName || css.root, className);

  const handleWhatsApp = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = `Hello Agnes, I am interested in ${title}, URL: ${url}`;
    const waUrl = `https://api.whatsapp.com/send/?phone=6591684503&text=${encodeURIComponent(
      text
    )}&type=phone_number&app_absent=0`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Form id={formId} onSubmit={handleSubmit} className={classes}>
      <div className={css.submitButton}>
        <PrimaryButton type="button" onClick={handleWhatsApp}>
          <FormattedMessage id="InquiryWithoutPaymentForm.ctaButton" />
        </PrimaryButton>
        <FinePrint isOwnListing={isOwnListing} omitYouWontBeChargedMessage={true} />
      </div>
    </Form>
  );
};

/**
 * A form for sending an inquiry without payment.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.rootClassName] - Custom class that overrides the default class for the root element
 * @param {string} [props.className] - Custom class that extends the default class for the root element
 * @param {string} props.formId - The ID of the form
 * @param {Function} props.onSubmit - The function to handle the form submission
 * @returns {JSX.Element}
 */
const InquiryWithoutPaymentForm = props => {
  const intl = useIntl();
  const initialValues = {};

  return <FinalForm initialValues={initialValues} {...props} intl={intl} render={renderForm} />;
};

export default InquiryWithoutPaymentForm;
