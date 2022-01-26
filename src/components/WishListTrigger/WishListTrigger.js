import React from 'react';
import { Heart, AlertCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import { useToasts } from '@magento/peregrine';
import { useHistory } from 'react-router-dom';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './WishListTrigger.module.css';

//An Icon on the header leading to the wishlist. Shows a toast that you need to login to access that page with a link to the log in page.

const WishListTrigger = () => {
    const classes = useStyle(defaultClasses);

    const HeartIcon = <Icon size={24} src={Heart} />;
    const AlertCircleIcon = <Icon size={24} src={AlertCircle} />;

    const history = useHistory();

    const [{ isSignedIn }] = useUserContext();

    const [, { addToast }] = useToasts();

    const showToast = () => {
        addToast({
            type: 'info',
            icon: AlertCircleIcon,
            message: 'You need to be signed in to view this page.',
            actionText: 'Sign in',
            timeout: 10000,
            onAction: remove => {
                history.push('/sign-in');
                remove();
            },
            onDismiss: remove => {
                remove();
            }
        });
    };

    return (
        <>
            {isSignedIn ? (
                <Link to="/wishlist" className={classes.wishlist_active}>
                    {HeartIcon}
                </Link>
            ) : (
                <button onClick={showToast} className={classes.wishlist_active}>
                    {HeartIcon}
                </button>
            )}
        </>
    );
};

export default WishListTrigger;
