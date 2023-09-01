
import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from "@keystatic/core/renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import keystaticConfig from "../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

const page = async ({ params }: { params: { slug: string; }; }) => {
	const article = await reader.collections.articles.read(params?.slug);
	if (!article) return notFound();

	return (
		<div className="max-w-[900px] mx-auto py-8">
			<h1 className="text-3xl font-bold">{article.title}</h1>

			{article.cover &&
				<Image
					width={300}
					height={300}
					alt="Cover Image"
					src={article.cover + ""}
					className="!w-full mt-5 rounded-lg"
				/>
			}

			<div className="mt-6">
				<DocumentRenderer document={await article.text()} />
			</div>
		</div>
	);
};

export default page;