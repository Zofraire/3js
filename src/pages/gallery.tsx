import { useState } from 'react'
import Link from 'next/link'
import {
  Container,
  Tabs,
  Tab,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material'
import { Work, workData } from '../data/data'

const categoryKeys: Work['type'][] = ['3D', '2D', 'video']
const categoryLabels: Record<Work['type'], string> = {
  '3D': '3D Models',
  '2D': 'Digital Art',
  video: 'Video Demos',
}

export default function Gallery() {
  const [tab, setTab] = useState<Work['type'] | null>(null)

  const handleChange = (_: React.SyntheticEvent, newValue: Work['type'] | null) => {
    setTab(newValue)
  }

  const filtered = tab ? workData.filter(w => w.type === tab) : []

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Gallery
      </Typography>

      <Tabs
        value={tab}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 4 }}
      >
        {categoryKeys.map(key => (
          <Tab
            key={key}
            label={categoryLabels[key]}
            value={key}
          />
        ))}
      </Tabs>

      {!tab ? (
        <Typography align="center" color="text.secondary">
          Select a category above to explore.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {filtered.map(work => (
            <Grid item key={work.id} xs={12} sm={6} md={4} lg={3}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardActionArea component={Link} href={`/work/${work.id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={work.thumbnail}
                    alt={work.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {work.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {work.type.toUpperCase()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
