import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";

import { useAuthenticator } from "@aws-amplify/ui-react";

export default () => {
  const { user, signOut } = useAuthenticator((context) => [
    context.user,
    context.signOut,
  ]);

  function itemClickHandler(id) {
    switch (id) {
      case "profile":
        console.log('profile');
        break;
      case "signout":
        signOut();
        break;        
      default:
        console.log('default');
    }
  }

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
          externalIconAriaLabel: " (opens in a new tab)",
        },
        {
          type: "button",
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },        
        {
          type: "button",
          text: "Sign out",
          iconName: "arrow-left",
          onClick: () => signOut(),
        },
        {
          type: "menu-dropdown",
          text: user.attributes.email,
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "signout", text: "Sign out" },
          ],
          onItemClick: ({ detail }) => itemClickHandler(detail.id),
        },
      ]}
      i18nStrings={{
        searchIconAriaLabel: "Search",
        searchDismissIconAriaLabel: "Close search",
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu",
      }}
    />
  );
};
