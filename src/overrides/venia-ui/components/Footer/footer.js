import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Footer/footer.module.css';
import {
    DEFAULT_LINKS,
    LOREM_IPSUM
} from '@magento/venia-ui/lib/components/Footer/sampleData';

const Footer = props => {
    const { links } = props;
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();

    const linkGroups = Array.from(links, ([groupKey, linkProps]) => {
        const linkElements = Array.from(linkProps, ([text, path]) => {
            const itemKey = `text: ${text} path:${path}`;
            const child = path ? (
                <Link className={classes.link} to={path}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </Link>
            ) : (
                <span className={classes.label}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </span>
            );

            return (
                <li key={itemKey} className={classes.linkItem}>
                    {child}
                </li>
            );
        });

        return (
            <ul key={groupKey} className={classes.linkGroup}>
                {linkElements}
            </ul>
        );
    });

    return (
        <footer className={classes.root}>
            <div className={classes.links}>
                {linkGroups}
                <div className={classes.callout}>
                    <h3 className={classes.calloutHeading}>
                        <span>NYHETERSBREV</span>
                    </h3>
                    <div className={classes.calloutBody}>
                        <span>
                            Prenumerera på vårt nyhetsbrev &amp; ta del av våra
                            nyheter.
                        </span>
                        <form>
                            <div className={classes.newsletterSubmit}>
                                <input
                                    type="text"
                                    placeholder="abc@xyz.com"
                                    className={classes.footer_input}
                                />
                                <button
                                    type="submit"
                                    className={classes.footer_submit}
                                >
                                    PRENUMERERA
                                </button>{' '}
                                <br />
                            </div>
                            <div className={classes.footer_checkText}>
                                <input type="checkbox" />
                                <label>
                                    Jag godkänner Superfronts{' '}
                                    <u>Integritetspolicy</u>
                                </label>
                            </div>
                        </form>
                    </div>
                    <ul className={classes.socialLinks}>
                        <li>
                            <a href="https://www.instagram.com/superfrontdotcom">
                                <Instagram size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/superfront">
                                <Facebook size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <Twitter size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.branding}>
                <p className={classes.copyright}>© 2021 Superfront</p>
            </div>
        </footer>
    );
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
