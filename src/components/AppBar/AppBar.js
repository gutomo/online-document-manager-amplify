import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";

//import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
//import {useEffect, useState} from "react";

export default () => {

    //const [username, setUsername] = useState("");
    const { user, signOut } = useAuthenticator((context) => [
        context.user,
        context.signOut
      ]);
    /*
    useEffect(() => {
       
        const load = async () => {
            Auth.currentUserInfo().then(
                (result) => {
                    setUsername(result.attributes.email);
                }
            )
        };

        load();
    }, []);
    */

    return (
        <TopNavigation
            identity={{
                href: "#",
                title: "Online Document Manager",
            }}
            utilities={[
                {
                    type: "button",
                    text: "Link",
                    href: "https://aws.amazon.com",
                    external: true,
                    externalIconAriaLabel: " (opens in a new tab)"
                },
                {
                    type: "button",
                    text: "Sign out",
                    iconName: "arrow-left",
                    onClick: () => signOut()
                },                
                {
                    type: "menu-dropdown",
                    text: user.attributes.email,
                    iconName: "user-profile",
                    items: [
                        {id: "profile", text: "Profile"},
                        {id: "signout", text: "Sign out"},
                    ]
                }
            ]}
            i18nStrings={{
                searchIconAriaLabel: "Search",
                searchDismissIconAriaLabel: "Close search",
                overflowMenuTriggerText: "More",
                overflowMenuTitleText: "All",
                overflowMenuBackIconAriaLabel: "Back",
                overflowMenuDismissIconAriaLabel: "Close menu"
            }}
        />
    );
}