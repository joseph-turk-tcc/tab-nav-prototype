import type { AppProps } from "next/app";
import { Box, CssBaseline, Tab, Tabs } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const links = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/other",
        label: "Other"
    }
];

const LinkTab: React.FunctionComponent<{
    href: string;
    label: string;
}> = props => {
    return (
        <Link passHref {...props}>
            <Tab {...props} />
        </Link>
    );
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [value, setValue] = React.useState(
        links.map(x => x.href).indexOf(router.pathname)
    );

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange}>
                    {links.map(link => (
                        <LinkTab
                            href={link.href}
                            key={link.href}
                            label={link.label}
                        />
                    ))}
                </Tabs>
            </Box>
            <Component {...pageProps} />
            <CssBaseline />
        </>
    );
}

export default MyApp;
