import fs from "fs";
import archieml from "archieml";
import docs from "../google.config.js";

const CWD = process.cwd();

const DOCUMENT_ID = "1AbCDeFgH...";

const tabMap = {
  home: "t.0",
  vdi: "t.125i8nxy17z2",
  vap: "t.pam0jxkv0bam",
};

const fetchGoogle = async ({ id, gid, tabId }) => {
	console.log(`fetching...${id}`);

	const base = "https://docs.google.com";
	const post = gid
		? `spreadsheets/u/1/d/${id}/export?format=csv&id=${id}&gid=${gid}`
		: `document/d/${id}/export?format=txt&tab=${tabId}`;
	const url = `${base}/${post}`;

	try {
		const response = await fetch(url);
		const text = await response.text();

		if (gid) return text;

		const parsed = archieml.load(text);
		const str = JSON.stringify(parsed, null, 2);
		return str;
	} catch (err) {
		throw new Error(err);
	}
};

(async () => {
	for (let d of docs) {
		if (d.tabs==true) {
			for (let [tabName, tabId] of Object.entries(tabMap)) {
				try {
					const str = await fetchGoogle({ id: d.id, tabId });
					const file = `${CWD}/${d.filepath.replace(".json", `.${tabName}.json`)}`;
					fs.writeFileSync(file, str);
				} catch (err) {
					console.log(err);
				}
			}
		} else {
		try {
			const str = await fetchGoogle(d);
			const file = `${CWD}/${d.filepath}`;
			fs.writeFileSync(file, str);
		} catch (err) {
			console.log(err);
		}
	}}
})();
