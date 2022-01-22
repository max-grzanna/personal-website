import prisma from '@/lib/prisma';

export default async function assetHandler(req, res) {
  try {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true,
      },
    });
    // eslint-disable-next-line no-underscore-dangle
    return res.status(200).json({ total: totalViews._sum.count.toString() });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
