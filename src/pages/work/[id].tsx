import { GetServerSideProps } from 'next'
import Link from 'next/link'
import {
  Container,
  Typography,
  Paper,
  Box,
  Button
} from '@mui/material'
import ImageViewer from '../../components/ImageViewer'
import ThreeViewer from '../../components/ThreeViewer'
import { workData, Work } from '../../data/data'

type Props = { work: Work }

export default function WorkDetail({ work }: Props) {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        component={Link}
        href="/gallery"
        variant="outlined"
        sx={{ mb: 4 }}
      >
        ← Back
      </Button>

      <Typography variant="h4" gutterBottom>
        {work.title}
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        {work.type === '3D' ? (
          <ThreeViewer modelUrl={work.fileUrl} />
        ) : work.type === '2D' ? (
          <ImageViewer imageUrl={work.fileUrl} alt={work.title} />
        ) : (
          <Box component="video" controls width="100%" borderRadius={1}>
            <source src={work.fileUrl} type="video/mp4" />
            Your browser doesn’t support the video tag.
          </Box>
        )}
      </Paper>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = parseInt(params!.id as string, 10)
  const work = workData.find(w => w.id === id) ?? null

  if (!work) {
    return { notFound: true }
  }

  return { props: { work } }
}
