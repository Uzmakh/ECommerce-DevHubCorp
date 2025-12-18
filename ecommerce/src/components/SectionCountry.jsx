import { useEffect, useMemo, useState } from "react";

const regions = [
  { code: "ae", country: "Arabic Emirates", domain: "shopname.ae" },
  { code: "au", country: "Australia", domain: "shopname.ae" },
  { code: "us", country: "United States", domain: "shopname.ae" },
  { code: "ru", country: "Russia", domain: "shopname.ru" },
  { code: "it", country: "Italy", domain: "shopname.it" },
  { code: "dk", country: "Denmark", domain: "denmark.com.dk" },
  { code: "fr", country: "France", domain: "shopname.com.fr" },
  { code: "cn", country: "China", domain: "shopname.ae" },
  { code: "gb", country: "Great Britain", domain: "shopname.co.uk" },
];

const SectionCountry = () => {
  const [flags, setFlags] = useState({});

  const apiUrl = useMemo(() => {
    const codes = regions.map((r) => r.code).join(",");
    return `https://restcountries.com/v3.1/alpha?codes=${codes}`;
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled || !Array.isArray(data)) return;
        const map = {};
        data.forEach((item) => {
          if (item?.cca2) {
            const key = item.cca2.toLowerCase();
            map[key] =
              item.flags?.png ||
              item.flags?.svg ||
              `https://flagcdn.com/w40/${key}.png`;
          }
        });
        setFlags(map);
      })
      .catch(() => {
        /* ignore fetch errors, fallback handles rendering */
      });

    return () => {
      cancelled = true;
    };
  }, [apiUrl]);

  return (
    <section className="my-10">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Suppliers by region
      </h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-5">
        {regions.map(({code,country,domain}) => (
          <div key={code} className="flex items-center gap-3 rounded py-3">
            <div className="h-8 w-10 overflow-hidden rounded-sm border border-gray-200">
              <img src={flags[code] || `https://flagcdn.com/w40/${code}.png`}
                alt={`${country} flag`}
                className="h-full w-full object-cover" />
</div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{country}</p>
              <p className="text-xs text-gray-500">{domain}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionCountry
