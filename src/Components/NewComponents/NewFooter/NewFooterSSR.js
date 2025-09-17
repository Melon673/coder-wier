import NewFooter from "./NewFooter";
export default async function NewFooterSSR() {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  let menus = [];
  let sideButton = null;
  let filteredSiteDetails = null;

  try {
    const res = await fetch(
      "https://devtechub.com/becms/menusPage/web-config?menuId=2", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Footer data");
    }

    const data = await res.json();

    menus = data?.content?.menus || [];
    sideButton = data?.content?.sideButton || {};
    filteredSiteDetails = data?.content?.siteDetails || {};

  } catch (err) {
    console.error("SSR Footer Component Error:", err);
  }

  return (
    <>
      <NewFooter
        menus={menus}
        sideButton={sideButton}
        imgLink={imgLink}
        filteredSiteDetails={filteredSiteDetails}
      />
    </>
  );
}
