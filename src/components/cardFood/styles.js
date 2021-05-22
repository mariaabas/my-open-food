import {makeStyles} from "@material-ui/core";

export const useStyleCardFood = makeStyles((theme) => ({
    root: {
        width: 500
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        marginTop:'30'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));