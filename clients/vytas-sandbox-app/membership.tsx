import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	CardActions,
	Button,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Chip,
	Divider,
	useTheme,
	useMediaQuery,
	alpha,
	Stack,
} from "@repo/ui/mui";
import { CheckCircleOutlined, Star, TrendingUp, Security, SupportAgent } from "@repo/ui-icons/mui";

const tiers = [
	{
		title: "Standard",
		price: "€5,000",
		billing: "/month",
		description: "Essential terminal features",
		features: [
			"Current Session Analytics (Summary, Overall, P&L)",
			"Core Monitors: Duration & Quote Monitors",
			"Standard Markets Visualisation",
			"Overall Performance Dashboard",
			"User & Symbols Overview",
			"Daily Reports (Funds)",
			"Standard Business Hours Support",
		],
		buttonText: "Get Started",
		buttonVariant: "outlined",
	},
	{
		title: "Alpha",
		subheader: "",
		price: "€20,001",
		billing: "/month",
		description: "Full-suite access with advanced terminal features",
		features: [
			"Everything in Standard, plus:",
			"Advanced Monitors (VAR & Corr, Slippage, Markout & Adv. Selection)",
			"Custom Dashboards",
			"Cross Sections: Group & ExpertID Analysis",
			"User Deep Visuals & Other Visuals",
			"Alerts Terminal",
			"24/7 Full Support & Dedicated Account Manager",
			"Flexible Pricing Models (e.g., Revenue Share)",
		],
		buttonText: "Contact Sales",
		buttonVariant: "contained",
	},
];

export default function MembershipPage() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Container maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
			{/* Header Section */}
			<Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
				<Typography component="h1" variant="h2" color="text.primary">
					Terminal Subscriptions
				</Typography>
				<Typography
					variant="h6"
					color="text.secondary"
					sx={{ maxWidth: "600px", mx: "auto", fontWeight: 400 }}
				>
					Choose the right tier for your brokerage operations.
				</Typography>
			</Box>

			{/* Pricing Cards - Flexbox Layout */}
			<Stack
				// Replaces display: flex and flexDirection
				direction={{ lg: "row" }}
				spacing={{ xs: 4, md: 5 }}
				sx={{
					// Tidy max-width logic to prevent cards from being too wide on tablets
					maxWidth: { xs: "100%", md: "550px", lg: "none" },
					// Centers the entire stack horizontally
					mx: "auto",
				}}
			>
				{tiers.map((tier, index) => {
					const isExpert = tier.title === "Alpha";

					return (
						<Box
							key={tier.title}
							sx={{
								flex: 1,
								position: "relative",
								transform: isExpert && !isMobile ? "scale(1.02)" : "scale(1)",
								transition: "transform 0.3s ease-in-out",
								"&:hover": {
									transform:
										isExpert && !isMobile ? "scale(1.04)" : "scale(1.02)",
								},
							}}
						>
							{isExpert && (
								<Box
									sx={{
										position: "absolute",
										top: -12,
										left: "50%",
										transform: "translateX(-50%)",
										zIndex: 1,
									}}
								>
									<Chip
										icon={<Star sx={{ fontSize: 16 }} />}
										label="RECOMMENDED"
										color="primary"
										size="small"
										sx={{
											fontWeight: "bold",
											px: 1,
											"& .MuiChip-icon": {
												color: "inherit",
											},
										}}
									/>
								</Box>
							)}

							<Card
								elevation={isExpert ? 8 : 3}
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									position: "relative",
									overflow: "visible",
									borderRadius: 4,
									border: isExpert
										? `2px solid ${theme.palette.primary.main}`
										: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										boxShadow: isExpert ? 12 : 6,
									},
								}}
							>
								{/* Header */}
								<Box
									sx={{
										p: { xs: 3, sm: 4 },
										pb: 2,
										textAlign: "center",
										borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
									}}
								>
									<Typography variant="h4">{tier.title}</Typography>
									{tier.subheader && (
										<Typography
											variant="caption"
											sx={{
												color: "primary.main",
												fontWeight: 600,
												textTransform: "uppercase",
												letterSpacing: "0.5px",
											}}
										>
											{tier.subheader}
										</Typography>
									)}
								</Box>

								<CardContent sx={{ flexGrow: 1, p: { xs: 3, sm: 4 } }}>
									{/* Price */}
									<Box sx={{ textAlign: "center", mb: 3 }}>
										{isExpert && (
											<Typography
												variant="caption"
												color="text.secondary"
												sx={{ mb: 1, fontWeight: 700 }}
											>
												Starting at
											</Typography>
										)}
										<Box
											sx={{
												display: "flex",
												alignItems: "baseline",
												justifyContent: "center",
												gap: 0.5,
											}}
										>
											<Typography variant="h3" color="text.primary">
												{tier.price}
											</Typography>
											<Typography variant="h6" color="text.secondary">
												{tier.billing}
											</Typography>
										</Box>
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{ mt: 2, lineHeight: 1.5 }}
										>
											{tier.description}
										</Typography>
									</Box>

									<Divider sx={{ my: 3 }} />

									{/* Features */}
									<List disablePadding>
										{tier.features.map((feature, idx) => {
											const isBold = feature.includes("Everything in Basic");
											return (
												<ListItem
													key={idx}
													disableGutters
													sx={{
														py: 1,
														alignItems: "flex-start",
														px: { xs: 1, sm: 2 },
													}}
												>
													<ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
														<CheckCircleOutlined
															color="primary"
															fontSize="small"
															sx={{
																opacity: isBold ? 1 : 0.7,
															}}
														/>
													</ListItemIcon>
													<ListItemText
														primary={feature}
														slotProps={{
															primary: {
																variant: "body2",
																sx: {
																	fontWeight: feature.includes(
																		"Everything in Basic",
																	)
																		? "bold"
																		: "regular",
																},
															},
														}}
													/>
												</ListItem>
											);
										})}
									</List>
								</CardContent>

								<CardActions sx={{ p: { xs: 3, sm: 4 }, pt: 0 }}>
									<Button
										fullWidth
										variant={
											tier.buttonVariant as "text" | "outlined" | "contained"
										}
										size="large"
										sx={{
											py: 1.5,
											borderRadius: 2,
											textTransform: "none",
											fontSize: "1rem",
											fontWeight: 600,
											...(isExpert && {
												background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
												"&:hover": {
													background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
												},
											}),
										}}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Box>
					);
				})}
			</Stack>
		</Container>
	);
}
