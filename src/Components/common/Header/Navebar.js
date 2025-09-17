import NavbarCSR from "@/utils/MainPage/NavbarCSR";
export default async function Navbar() {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  let menus = [];
  let sideButton = null;
  let filteredSiteDetails = null;

  try {
    const res = await fetch(
      "https://devtechub.com/becms/menusPage/web-config?menuId=1", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Navbar data");
    }

    const data = await res.json();

    menus = data?.content?.menus || [];
    sideButton = data?.content?.sideButton || {};

    const siteDetails = data?.content?.siteDetails || {};
    filteredSiteDetails = {
      websiteLogo: siteDetails.websiteLogo,
      websiteName: siteDetails.websiteName,
      copywrite: siteDetails.copywrite,
      contactEmail: siteDetails.emailsForEmailNotification,
    };
  } catch (err) {
    console.error("SSR Navbar Component Error:", err);
  }
  return (
    <>
      {menus.length > 0 && (
        <NavbarCSR
          menus={menus}
          sideButton={sideButton}
          imgLink={imgLink}
          filteredSiteDetails={filteredSiteDetails}
        />
      )}
    </>
  );
}
